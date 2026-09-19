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
		"content": `<style>.zqw4iybko {
  fill: currentColor;
  d: path("m3.7 9.11l7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59L5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41");
}
</style><path class="zqw4iybko"/>`,
		"fallback": "ic:round-call-missed-outgoing",
	});
}

export default Component;
