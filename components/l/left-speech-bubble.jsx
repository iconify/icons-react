import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zcizd98ek {
  fill: var(--svg-color--8ccaf7, #8ccaf7);
  d: path("M18 1c9.941 0 18 6.268 18 14c0 4.368-2.574 8.268-6.604 10.835C29.92 28.144 31.141 31.569 34 35c-5.758-.96-9.44-3.761-11.716-6.416A23 23 0 0 1 18 29C8.059 29 0 22.732 0 15S8.059 1 18 1");
}
</style><path class="zcizd98ek"/>`,
		"fallback": "twemoji:left-speech-bubble",
	});
}

export default Component;
