import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.snys7nx_a {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M108.91 99.71H62.6l48.33-79.77c.44-.73.46-1.64.04-2.39c-.42-.74-1.21-1.2-2.06-1.2H81.06c-.25 0-.49.05-.71.13H19.09c-1.24 0-2.24 1-2.24 2.24v16.72c0 1.24 1.01 2.24 2.24 2.24h47.43l-49.44 79.75c-.45.73-.47 1.65-.06 2.4c.42.75 1.21 1.21 2.07 1.21h29.25c.25 0 .49-.05.72-.12h59.84c1.23 0 2.24-1 2.24-2.24v-16.72c.01-1.25-1-2.25-2.23-2.25");
}
</style><path class="snys7nx_a"/>`,
		"fallback": "noto-v1:letter-z",
	});
}

export default Component;
