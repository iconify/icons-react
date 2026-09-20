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
		"content": `<style>.db5byrb5x {
  fill: currentColor;
  d: path("M17.012 10.192H6.994l-.352 2.731h10.735zM4.827 19.02l1.187-8.827h-2.36q-.327 0-.528-.265t-.114-.586l1.175-4.058q.061-.23.234-.362q.173-.133.408-.113H19.19q.234 0 .407.132q.173.133.235.362l1.175 4.038q.086.321-.115.587q-.2.265-.527.265h-2.374l1.181 8.827h-.98l-.695-5.096H6.502l-.694 5.096z");
}
</style><path class="db5byrb5x"/>`,
		"fallback": "material-symbols-light:table-restaurant",
	});
}

export default Component;
