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
		"content": `<style>.ygzl39mww {
  fill: currentColor;
  d: path("M5.616 19q-.691 0-1.153-.462T4 17.384V6.616q0-.691.463-1.153T5.616 5h3q.213 0 .356.143q.144.144.144.357v13q0 .214-.144.357q-.143.143-.356.143zm5.884 1.5v-17q0-.213.143-.357T12 3t.357.143t.143.357V5h5.885q.69 0 1.152.463T20 6.616v10.769q0 .69-.463 1.153T18.385 19H12.5v1.5q0 .214-.143.357T12 21t-.357-.143t-.143-.357");
}
</style><path class="ygzl39mww"/>`,
		"fallback": "material-symbols-light:split-scene-right-rounded",
	});
}

export default Component;
