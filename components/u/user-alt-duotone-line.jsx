import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/y/yoqsptb2c.css';
import '../../css/o/of_edpbfj.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbEN4Lc4P"><g class="o58hkebvg"><circle class="yoqsptb2c"/><path class="of_edpbfj"/></g></mask></defs><path mask="url(#SVGbEN4Lc4P)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:user-alt-duotone-line",
	});
}

export default Component;
