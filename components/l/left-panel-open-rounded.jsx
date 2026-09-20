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
		"content": `<style>.furtsucfu {
  fill: currentColor;
  d: path("M12.5 9.2v5.6q0 .35.3.475t.55-.125l2.45-2.45q.3-.3.3-.7t-.3-.7l-2.45-2.45q-.25-.25-.55-.125t-.3.475M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5-2h9V5h-9z");
}
</style><path class="furtsucfu"/>`,
		"fallback": "material-symbols:left-panel-open-rounded",
	});
}

export default Component;
