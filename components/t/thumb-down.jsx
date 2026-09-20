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
		"content": `<style>.pst2j3mwl {
  fill: currentColor;
  d: path("M6.539 4.808h9.807v11L10.077 22l-.442-.442q-.137-.137-.23-.35t-.093-.393v-.157l1.023-4.85h-6.72q-.626 0-1.12-.495T2 14.194v-1.231q0-.137.028-.298q.028-.162.084-.298l2.73-6.474q.206-.461.693-.773q.486-.311 1.003-.311m10.808 11v-11H21v11z");
}
</style><path class="pst2j3mwl"/>`,
		"fallback": "material-symbols-light:thumb-down",
	});
}

export default Component;
