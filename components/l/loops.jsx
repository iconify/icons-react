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
		"content": `<style>.f8e19zxki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.356 23.995a5.93 5.93 0 0 1-2.506 7.424L20.036 41.706a5.93 5.93 0 0 1-8.896-5.135V14.858a2.635 2.635 0 0 1 3.954-2.283l19.792 11.427");
}

.i5uxdbcbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.353 7.837a5.93 5.93 0 0 1 7.682-1.542l17.812 10.287a5.93 5.93 0 0 1 0 10.271l-18.8 10.858a2.635 2.635 0 0 1-3.954-2.282V12.575");
}

.rrzd2ebxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.362 40.171a5.93 5.93 0 0 1-5.177-5.882l.002-20.573a5.93 5.93 0 0 1 8.896-5.136l18.803 10.857a2.636 2.636 0 0 1 0 4.564L15.094 35.429");
}
</style><path class="i5uxdbcbw"/><path class="f8e19zxki"/><path class="rrzd2ebxk"/>`,
		"fallback": "arcticons:loops",
	});
}

export default Component;
