import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bn33s3-eg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.883 4.865c-5.523 0-10 4.477-10 10a10 10 0 0 0 1.93 5.863a17.6 17.6 0 0 0-.348 3.27c0 9.693 7.856 17.55 17.549 17.55h.002a17.6 17.6 0 0 0 3.242-.34a10 10 0 0 0 5.86 1.927a10 10 0 0 0 8.102-15.861c.217-1.079.334-2.176.347-3.276c0-9.692-7.857-17.55-17.55-17.55h-.001a17.6 17.6 0 0 0-3.24.34a10 10 0 0 0-5.893-1.923");
}

.t2lp69brj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.71 30.64a4.76 4.76 0 0 0 4.16 1.86h2.52a4.24 4.24 0 0 0 4.24-4.24v-.01A4.24 4.24 0 0 0 25.4 24h-2.79a4.24 4.24 0 0 1-4.24-4.24v-.01a4.24 4.24 0 0 1 4.23-4.25h2.53a4.76 4.76 0 0 1 4.16 1.86");
}
</style><path class="t2lp69brj"/><path class="bn33s3-eg"/>`,
		"fallback": "arcticons:skype-for-business",
	});
}

export default Component;
