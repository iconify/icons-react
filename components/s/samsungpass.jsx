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
		"content": `<style>.vdtbo755r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.731 20.302v-4.533a11.269 11.269 0 0 1 22.538 0v4.533M20.586 36.473c.758.636 1.576.928 3.414.928h.931a2.747 2.747 0 0 0 2.744-2.75a2.747 2.747 0 0 0-2.744-2.75H23.07a2.747 2.747 0 0 1-2.744-2.75a2.747 2.747 0 0 1 2.744-2.75H24c1.838 0 2.656.292 3.414.928");
}

.xs2n971ac {
  width: 32.785px;
  height: 23.198px;
  x: 7.607px;
  y: 20.302px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.184px;
}
</style><rect class="xs2n971ac"/><path class="vdtbo755r"/>`,
		"fallback": "arcticons:samsungpass",
	});
}

export default Component;
