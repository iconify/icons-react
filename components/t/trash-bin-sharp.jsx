import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1lif4b0z.css';
import '../../css/t/tq3i0n2qm.css';
import '../../css/e/ehuvywcsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGfDRX2dml" class="t1lif4b0z"/></defs><use href="#SVGfDRX2dml"/><use href="#SVGfDRX2dml"/><path class="tq3i0n2qm"/><rect class="ehuvywcsw"/>`,
		"fallback": "famicons:trash-bin-sharp",
	});
}

export default Component;
