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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hphf_fpav {
  fill-rule: evenodd;
  d: path("M2.5 4.75a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1");
}

.jed0dlt_t {
  fill-rule: evenodd;
  d: path("M12.75 15.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25-8a1 1 0 0 1 1-1h1.625a1 1 0 0 1 0 2H3.5a1 1 0 0 1-1-1m6.5 0a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1");
}

.o3h6zowaq {
  fill-rule: evenodd;
  d: path("M7.75 10.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5");
}

.p2w9r8sed {
  fill-rule: evenodd;
  d: path("M12.75 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25 7a1 1 0 0 1 1-1H10a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H16.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="hphf_fpav"/><path clip-rule="evenodd" class="p2w9r8sed"/><path clip-rule="evenodd" class="jed0dlt_t"/><path clip-rule="evenodd" class="o3h6zowaq"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:sliders-off",
	});
}

export default Component;
