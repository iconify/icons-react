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
		"content": `<style>.ip8dtcy-g {
  fill: currentColor;
  d: path("M8.54 10.54q.23-.23.23-.54t-.23-.54T8 9.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m4 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23m4 0q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23t.54-.23M3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zM5.65 16h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z");
}
</style><path class="ip8dtcy-g"/>`,
		"fallback": "material-symbols-light:sms-outline",
	});
}

export default Component;
