import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyyuksbkg.css';
import '../../css/q/qfogileml.css';
import '../../css/k/krxledc2m.css';
import '../../css/z/zcw66ybby.css';
import '../../css/e/elly5568l.css';
import '../../css/z/zdof4gt7a.css';
import '../../css/l/l3onylb5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="eyyuksbkg"/><path class="qfogileml"/><path class="krxledc2m"/><path class="zcw66ybby"/><path class="elly5568l"/><path class="zdof4gt7a"/><path class="l3onylb5x"/>`,
		"fallback": "fxemoji:monkeyhear",
	});
}

export default Component;
