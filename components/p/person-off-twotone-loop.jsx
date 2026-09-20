import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axscvx.css';
import '../../css/g/g4wusq.css';
import '../../css/t/t5pxry.css';
import '../../css/p/p7_ytr.css';
import '../../css/r/rn7y4o.css';
import '../../css/y/y4wbml.css';
import '../../css/b/botfzx.css';
import '../../css/a/aqb-fd.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-2dk93e.css';
import '../../css/d/d-l5brra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvGZCidsi"><path class="axscvx g4wusq t5pxry"/><path class="g4wusq p7_ytr t5pxry"/><path class="rn7y4o t5pxry y4wbml"/></mask></defs><path mask="url(#SVGvGZCidsi)" class="botfzx"/><path class="aqb-fd t5pxry y4wbml"/>`,
		"fallback": "line-md:person-off-twotone-loop",
	});
}

export default Component;
