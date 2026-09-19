import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbk93i8sj.css';
import '../../css/b/bu-tcbcin.css';
import '../../css/f/fhva5bb0u.css';
import '../../css/q/qbqvgkuwj.css';
import '../../css/m/m8bttzbsi.css';
import '../../css/q/qtabqobxa.css';
import '../../css/i/i7qbpzbgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVoCrycwd"><g class="ft5dv1b6b"><rect class="jbk93i8sj"/><circle class="bu-tcbcin"/><circle class="fhva5bb0u"/><circle class="qbqvgkuwj"/><circle class="m8bttzbsi"/><circle class="qtabqobxa"/><circle class="i7qbpzbgw"/></g></mask></defs><path mask="url(#SVGVoCrycwd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sound",
	});
}

export default Component;
