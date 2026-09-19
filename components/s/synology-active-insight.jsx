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
		"content": `<style>.h_0eawbao {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M9.17 41.515a4.675 4.675 0 0 1-4.043-7.011l14.827-25.68a4.673 4.673 0 1 1 8.093 4.673l-14.826 25.68a4.67 4.67 0 0 1-4.052 2.338Z");
}

.tsafl6fyb {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M38.83 41.515a4.67 4.67 0 0 1-4.05-2.338l-14.827-25.68a4.673 4.673 0 0 1 8.093-4.674l14.827 25.68a4.675 4.675 0 0 1-4.042 7.011Zm-17.167-.001H9.173a4.673 4.673 0 0 1 0-9.347h12.49a4.673 4.673 0 0 1 0 9.346Z");
}
</style><path class="tsafl6fyb"/><path class="h_0eawbao"/>`,
		"fallback": "arcticons:synology-active-insight",
	});
}

export default Component;
