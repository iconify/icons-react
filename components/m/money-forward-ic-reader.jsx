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
		"content": `<style>.gimdoy1ig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.844 28.897l6.779 9.61M21.485 24.135l-7.308-10.361");
}

.sqtdbdb9i {
  cx: 40.646px;
  cy: 12.348px;
  r: 2.854px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.u8cpr5b6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.305 13.774A3.797 3.797 0 0 0 4.5 17.579V34.7a3.797 3.797 0 0 0 3.805 3.805h29.488a3.797 3.797 0 0 0 3.805-3.805V18.451q-.473.076-.951.078a6 6 0 0 1-1.05-.1l-6.361 10.014a2.378 2.378 0 0 1-3.859.218l-3.091-3.835l-2.3 6.493c-.611 1.722-2.854 2.141-4.045.756l-2.13-2.473l-1.378 4.597a2.378 2.378 0 1 1-4.555-1.366l2.627-8.756c.54-1.798 2.854-2.29 4.08-.867l2.287 2.656l2.352-6.641c.621-1.754 2.925-2.147 4.093-.699l3.682 4.569l4.587-7.216a6.2 6.2 0 0 1-.94-2.105z");
}
</style><path class="u8cpr5b6v"/><circle class="sqtdbdb9i"/><path class="gimdoy1ig"/>`,
		"fallback": "arcticons:money-forward-ic-reader",
	});
}

export default Component;
