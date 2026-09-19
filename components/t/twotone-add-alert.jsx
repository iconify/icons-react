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
		"content": `<style>.tuipp4bhj {
  fill: currentColor;
  d: path("M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5m4 7h-3v3h-2v-3H8v-2h3V8h2v3h3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zpd3ivc9v {
  fill: currentColor;
  d: path("M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5zm-4-7V8h-2v3H8v2h3v3h2v-3h3v-2z");
}
</style><path class="tuipp4bhj"/><path class="zpd3ivc9v"/>`,
		"fallback": "ic:twotone-add-alert",
	});
}

export default Component;
