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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pcb7wdcez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.256 14.414h4.698m-2.349 7.228v-7.228m4.544 0v7.228m4.789-7.228v7.228m-4.789-3.704h4.789m2.199.09h2.44m1.174 3.614h-3.614v-7.228h3.614m2.051 11.944H39.5m-2.349 7.228v-7.228m-22.008 0v7.228m4.789-7.228v7.228m-4.789-3.704h4.789m8.408 2.891c.453.542.995.813 1.808.813h1.084c.994 0 1.807-.813 1.807-1.807s-.813-1.807-1.807-1.807h-1.174c-.994 0-1.807-.813-1.807-1.807s.813-1.807 1.807-1.807h1.084c.813 0 1.355.18 1.807.813m-8.902 6.415a2.333 2.333 0 0 1-2.35-2.349v-2.44c0-1.355 1.085-2.439 2.35-2.439a2.43 2.43 0 0 1 2.439 2.44v2.349a2.43 2.43 0 0 1-2.44 2.44m-10.667-4.789c0-1.356-1.084-2.44-2.44-2.44S8.5 27.442 8.5 28.798v2.439c0 1.355 1.084 2.35 2.44 2.35s2.439-1.085 2.439-2.35h-2.44");
}
</style><path class="pcb7wdcez"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:the-ghost",
	});
}

export default Component;
