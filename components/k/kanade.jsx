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
		"content": `<style>.hqenocc6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.916 30.304v10.208M11.6 42.5h24.824m1.66-12.196v10.208M24.012 24.863v13.12m0-.003l6.821-8.024m-13.695 0l6.876 8.027M9.916 15.599v6.07l28.168-.028v-5.898m-2.072-.144V5.5h-2.414m-3.052 0H17.8m-2.964 0h-2.524v9.811M19.18 5.5l-6.868 6.819M29.107 5.5l6.905 6.3");
}

.msnwsi3ix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.331 13.485h2.553v2.553h-2.553zm10.808 0h2.553v2.553h-2.553z");
}
</style><path class="hqenocc6m"/><path class="msnwsi3ix"/>`,
		"fallback": "arcticons:kanade",
	});
}

export default Component;
