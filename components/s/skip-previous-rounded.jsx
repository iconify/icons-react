import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pu942uhfx {
  fill: currentColor;
  d: path("M6.73 16.116V7.885q0-.214.144-.357q.143-.144.357-.144t.357.144t.143.356v8.231q0 .214-.143.357q-.144.143-.357.143t-.357-.143q-.143-.143-.143-.357m9.277-.332l-4.662-3.112q-.186-.13-.27-.295T10.992 12t.084-.376q.084-.164.27-.295l4.662-3.112q.106-.08.217-.105t.237-.025q.323 0 .565.217t.242.59v6.212q0 .373-.242.59q-.242.218-.565.218q-.125 0-.237-.025t-.217-.106");
}
</style><path class="pu942uhfx"/>`,
		"fallback": "material-symbols-light:skip-previous-rounded",
	});
}

export default Component;
