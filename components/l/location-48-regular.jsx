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
		"content": `<style>.t32tnv8qw {
  fill: currentColor;
  d: path("M24 4c9.389 0 17 7.611 17 17a16.92 16.92 0 0 1-4 10.955l-.022.026l-.016.019H37L26.911 42.709a4 4 0 0 1-5.822 0L11 32h.038l-.017-.02l-.021-.025A16.92 16.92 0 0 1 7 21c0-9.389 7.611-17 17-17m0 2.5C15.992 6.5 9.5 12.992 9.5 21c0 3.58 1.294 6.852 3.443 9.382l.308.362l9.657 10.251a1.5 1.5 0 0 0 2.184 0l9.657-10.25l.308-.363A14.43 14.43 0 0 0 38.5 21c0-8.008-6.492-14.5-14.5-14.5m0 7.5a7 7 0 1 1 0 14a7 7 0 0 1 0-14m0 2.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="t32tnv8qw"/>`,
		"fallback": "fluent:location-48-regular",
	});
}

export default Component;
