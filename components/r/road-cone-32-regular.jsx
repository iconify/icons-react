import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jej8mub1g {
  fill: currentColor;
  d: path("M14.77 2a1.5 1.5 0 0 0-1.434 1.064L5.759 28H3a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2h-2.759L18.665 3.064A1.5 1.5 0 0 0 17.229 2zM7.85 28l1.66-5.462a1 1 0 0 0 .491.129h8.5a1 1 0 1 0 0-2h-8.423l.81-2.667H17a1 1 0 1 0 0-2h-5.505l3.646-12h1.718l7.292 24z");
}
</style><path class="jej8mub1g"/>`,
		"fallback": "fluent:road-cone-32-regular",
	});
}

export default Component;
