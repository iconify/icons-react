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
		"content": `<style>.kv3xu1oqf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.889 4.311q-1.687-1.034-3.413-.068Q3.75 5.21 3.75 7.188v9.624q0 1.978 1.726 2.945t3.413-.068l7.851-4.812q1.611-.987 1.611-2.877T16.74 9.123zM7.25 12q0-2.75 2.75-2.75T12.75 12T10 14.75T7.25 12");
}
</style><path class="kv3xu1oqf"/>`,
		"fallback": "uix-solid:tap-to-play",
	});
}

export default Component;
