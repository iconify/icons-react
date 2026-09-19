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
		"content": `<style>.aqx-86mgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.929 34.856v-8.442");
}

.g5-0-pfwi {
  cx: 31.988px;
  cy: 26.622px;
  r: 5.941px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nqdirxb3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.789 34.856v-8.442");
}

.o4eix6bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.02 41.423H13.698A7.25 7.25 0 0 1 6.4 34.127V25.58c0-8.025 6.566-14.591 14.592-14.591h5.732c8.025 0 14.592 6.566 14.592 14.591v8.547a7.25 7.25 0 0 1-7.296 7.295Z");
}

.oz4fkdbel {
  cx: 15.729px;
  cy: 26.622px;
  r: 5.941px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rir3kqbff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.74 18.18c1.771-1.25 3.022-3.23 3.022-5.524c0-3.752-3.127-6.879-7.087-6.879c-3.335 0-6.15 2.293-6.88 5.316m-9.591 0c-.73-3.022-3.544-5.315-6.879-5.315c-3.96 0-7.087 3.126-7.087 6.878c0 2.293 1.25 4.274 3.022 5.524");
}
</style><path class="o4eix6bff"/><path class="rir3kqbff"/><circle class="oz4fkdbel"/><path class="nqdirxb3c"/><circle class="g5-0-pfwi"/><path class="aqx-86mgf"/>`,
		"fallback": "arcticons:peripage",
	});
}

export default Component;
