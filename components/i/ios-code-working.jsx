import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/funu2bcxe.css';
import '../../css/r/r7co23qft.css';
import '../../css/f/fn167tpom.css';
import '../../css/v/vzs57rbrx.css';
import '../../css/s/sch1b7e_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="funu2bcxe"/><path class="r7co23qft"/><circle class="fn167tpom"/><circle class="vzs57rbrx"/><circle class="sch1b7e_t"/>`,
		"fallback": "ion:ios-code-working",
	});
}

export default Component;
