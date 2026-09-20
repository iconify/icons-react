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
		"content": `<style>.nqbcwpodp {
  fill: currentColor;
  d: path("M11 19v-5L3.45 5.5q-.2-.2-.325-.462T3 4.5q0-.65.45-1.075T4.55 3h14.9q.65 0 1.1.425T21 4.5q0 .275-.125.538t-.325.462L13 14v5h4q.425 0 .713.288T18 20t-.288.713T17 21H7q-.425 0-.712-.288T6 20t.288-.712T7 19zM7.45 7h9.1l1.8-2H5.65z");
}
</style><path class="nqbcwpodp"/>`,
		"fallback": "material-symbols:local-bar-rounded",
	});
}

export default Component;
