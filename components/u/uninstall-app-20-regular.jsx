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
		"content": `<style>.uvgdz8b9i {
  fill: currentColor;
  d: path("M4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5v5h5A1.5 1.5 0 0 1 17 11v4.5a1.5 1.5 0 0 1-1.5 1.5zm11-6.5h-5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5m-6 0H4v5a.5.5 0 0 0 .5.5h5zm0-1v-5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5zm4.354-2.646a.5.5 0 0 1-.708-.708L14.793 4.5l-1.647-1.646a.5.5 0 0 1 .708-.708L15.5 3.793l1.646-1.647a.5.5 0 0 1 .708.708L16.207 4.5l1.647 1.646a.5.5 0 0 1-.708.708L15.5 5.207z");
}
</style><path class="uvgdz8b9i"/>`,
		"fallback": "fluent:uninstall-app-20-regular",
	});
}

export default Component;
