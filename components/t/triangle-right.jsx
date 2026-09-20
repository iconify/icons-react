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
		"content": `<style>.t87b9yv9j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.998 10L6 5.963v8.074zm2.5.866a1 1 0 0 0 0-1.732L5.5 3.365a1 1 0 0 0-1.5.866V15.77a1 1 0 0 0 1.5.866z");
}
</style><path clip-rule="evenodd" class="t87b9yv9j"/>`,
		"fallback": "pepicons-pop:triangle-right",
	});
}

export default Component;
