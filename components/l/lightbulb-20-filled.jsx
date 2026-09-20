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
		"content": `<style>.k47tr2n3u {
  fill: currentColor;
  d: path("m13.073 15l-.384 1.605c-.184.771-.865 1.33-1.67 1.39l-.144.005h-1.75c-.818 0-1.535-.516-1.776-1.262l-.038-.133L6.928 15zM10 2c3.314 0 6 2.597 6 5.8c0 1.677-.745 3.216-2.204 4.594a.6.6 0 0 0-.145.213l-.026.081L13.311 14H6.689l-.313-1.311a.6.6 0 0 0-.17-.295c-1.39-1.312-2.133-2.77-2.2-4.355L4 7.8l.003-.191C4.108 4.494 6.753 2 10 2");
}
</style><path class="k47tr2n3u"/>`,
		"fallback": "fluent:lightbulb-20-filled",
	});
}

export default Component;
