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
		"content": `<style>.boixj_bye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.474 40.239l35.052-33.36m-30.1 28.828l18.437 6.778c3.835-1.774 4.091-10.559-.693-12.149l-15.99-5.314c-4.464-1.451-5.287-5.634-.957-8.887c.72-.541 2.185-1.229 3.432-1.38");
}

.sepvvabwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.678 11.493L19.962 5.515c-7.085 3.692-6.587 9.39-.973 11.213l17.261 5.727c6.657 2.209 5.966 9.397.988 14.375c-2.784 2.783-7.002 5.343-7.375 5.655");
}
</style><path class="boixj_bye"/><path class="sepvvabwu"/>`,
		"fallback": "arcticons:solflare",
	});
}

export default Component;
