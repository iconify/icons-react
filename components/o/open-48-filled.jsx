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
		"content": `<style>.j-f_t8bhy {
  fill: currentColor;
  d: path("M41.45 6.34c.336.275.55.692.55 1.16v12a1.5 1.5 0 0 1-3 0v-8.379l-9.44 9.44a1.5 1.5 0 1 1-2.12-2.122L36.877 9H28.5a1.5 1.5 0 0 1 0-3h11.981a1.5 1.5 0 0 1 .97.34M12.5 9A3.5 3.5 0 0 0 9 12.5v23a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-8a1.5 1.5 0 1 1 3 0v8a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-23A6.5 6.5 0 0 1 12.5 6h8a1.5 1.5 0 0 1 0 3z");
}
</style><path class="j-f_t8bhy"/>`,
		"fallback": "fluent:open-48-filled",
	});
}

export default Component;
