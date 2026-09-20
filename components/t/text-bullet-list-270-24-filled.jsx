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
		"content": `<style>.o_tx369mt {
  fill: currentColor;
  d: path("M16.5 20.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.5 4a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m.5-4V2.995a1 1 0 0 1 1.993-.117l.007.117V16.5a1 1 0 0 1-1.993.117zm-6.492 4a1.5 1.5 0 1 1 2.999 0a1.5 1.5 0 0 1-3 0m.493-4V2.995a1 1 0 0 1 1.993-.117L7 2.995V16.5a1 1 0 0 1-1.993.117z");
}
</style><path class="o_tx369mt"/>`,
		"fallback": "fluent:text-bullet-list-270-24-filled",
	});
}

export default Component;
