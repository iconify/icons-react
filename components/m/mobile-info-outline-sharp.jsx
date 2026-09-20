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
		"content": `<style>.tm5w4tkmc {
  fill: currentColor;
  d: path("M11.5 15.962h1v-5h-1zm.934-6.985q.182-.177.182-.438t-.182-.439T12 7.923t-.434.182t-.182.434t.182.433t.434.182t.434-.177M6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="tm5w4tkmc"/>`,
		"fallback": "material-symbols-light:mobile-info-outline-sharp",
	});
}

export default Component;
