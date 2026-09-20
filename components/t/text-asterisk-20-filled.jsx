import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m54aksb_n {
  fill: currentColor;
  d: path("M10.6 2.5a.6.6 0 1 0-1.2 0v6.052l-4.279-4.28a.6.6 0 1 0-.848.85L8.552 9.4H2.5a.6.6 0 1 0 0 1.2h6.052l-4.279 4.28a.6.6 0 0 0 .849.848L9.4 11.449V17.5a.6.6 0 1 0 1.2 0v-6.05l4.28 4.279a.6.6 0 0 0 .848-.849l-4.279-4.28H17.5a.6.6 0 1 0 0-1.2h-6.05l4.278-4.279a.6.6 0 0 0-.848-.848L10.6 8.552z");
}
</style><path class="m54aksb_n"/>`,
		"fallback": "fluent:text-asterisk-20-filled",
	});
}

export default Component;
