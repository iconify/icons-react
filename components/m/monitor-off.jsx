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
		"content": `<style>.agdd0sxsm {
  fill-rule: evenodd;
  d: path("M17.5 1h-15A2.5 2.5 0 0 0 0 3.5v10A2.5 2.5 0 0 0 2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 1M2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.lc8erq-5n {
  d: path("M5.5 19.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2z");
}

.rdguf3bwx {
  fill-rule: evenodd;
  d: path("M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-2.5 3V16h2v1.5z");
}

.vqyephr6g {
  fill-rule: evenodd;
  d: path("M19 12H1v-1h18z");
}

.x4xxegbkg {
  d: path("M10 13.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="agdd0sxsm"/><path class="x4xxegbkg"/><path clip-rule="evenodd" class="rdguf3bwx"/><path class="lc8erq-5n"/><path clip-rule="evenodd" class="vqyephr6g"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:monitor-off",
	});
}

export default Component;
