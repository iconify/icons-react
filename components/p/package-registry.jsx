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
		"content": `<style>.sg3z4j82w {
  d: path("m2.5 6.5l8 4l8-4m-8 4v8m-4-14l8 4m-.25 6.25a3.75 1.5 0 1 0 7.5 0a3.75 1.5 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp0jt3gaz {
  d: path("M14.25 14.75v5.75a3.75 1.5 0 0 0 7.5 0v-5.75");
}

.wpw-6hbzg {
  d: path("M14.25 17.75a3.75 1.5 0 0 0 7.5 0");
}

.y8-jic01n {
  d: path("m11.474 18.013l-.974.487l-8-4v-8l8-4l8 4v3.956");
}
</style><g class="ulnmmdpxh"><path class="y8-jic01n"/><path class="sg3z4j82w"/><path class="wp0jt3gaz"/><path class="wpw-6hbzg"/></g>`,
		"fallback": "uix-sharp:package-registry",
	});
}

export default Component;
