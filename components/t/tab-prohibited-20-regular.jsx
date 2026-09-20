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
		"content": `<style>.n7avf06rh {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.6a5.5 5.5 0 0 0-1-.393V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.207q.149.524.393 1H5a2 2 0 0 1-2-2zm7 9.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 11 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18");
}
</style><path class="n7avf06rh"/>`,
		"fallback": "fluent:tab-prohibited-20-regular",
	});
}

export default Component;
