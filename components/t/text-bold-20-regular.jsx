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
		"content": `<style>.wb1vk4byq {
  fill: currentColor;
  d: path("M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.501c2.403 0 3.999 1.988 3.999 4c0 .872-.3 1.738-.834 2.44c.904.703 1.581 1.802 1.581 3.31c0 2.863-2.437 4.246-4.244 4.246H6.75c-.69 0-1.25-.56-1.25-1.25zM8 11v3.496h2.753c.811 0 1.744-.62 1.744-1.746c0-1.129-.937-1.75-1.744-1.75zm0-2.5h2.248A1.5 1.5 0 0 0 11.75 7c0-.78-.62-1.5-1.499-1.5H8z");
}
</style><path class="wb1vk4byq"/>`,
		"fallback": "fluent:text-bold-20-regular",
	});
}

export default Component;
