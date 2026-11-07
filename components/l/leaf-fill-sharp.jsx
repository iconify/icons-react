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
		"content": `<style>.o7tl5946h {
  fill: currentColor;
  d: path("m3.293 19.293l8.502-8.502a1 1 0 0 0-1.416-1.412l-5.404 5.404c-1.069-3.824.404-7.212 3.851-9.144a12.5 12.5 0 0 1 2.833-1.135c2.413-.656 4.953-.725 7.432-.5c.48.044.861.425.905.905c.225 2.479.156 5.019-.5 7.432c-.507 1.863-1.392 3.671-2.809 5.011c-2.043 1.928-4.708 2.419-7.381 1.697a11.4 11.4 0 0 1-2.123-.817l-2.476 2.475a.999.999 0 1 1-1.414-1.414");
}
</style><path class="o7tl5946h"/>`,
		"fallback": "coolicons:leaf-fill-sharp",
	});
}

export default Component;
