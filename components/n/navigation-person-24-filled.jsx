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
		"content": `<style>.zu8kd-i4s {
  fill: currentColor;
  d: path("M3 17h13.337c.178.375.42.713.713 1h-.277a2.77 2.77 0 0 0-2.133 1H3a1 1 0 0 1-.117-1.993zm0-4l14.052-.002A3.5 3.5 0 0 1 19.5 12c.816 0 1.567.28 2.162.747a1 1 0 0 0-.662-1.75L3 11l-.117.007A1 1 0 0 0 3 13m0-8h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zm19 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C24 22.431 22.714 24 19.5 24S15 22.437 15 20.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z");
}
</style><path class="zu8kd-i4s"/>`,
		"fallback": "fluent:navigation-person-24-filled",
	});
}

export default Component;
