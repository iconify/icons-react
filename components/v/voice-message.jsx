import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arj7difgh.css';
import '../../css/x/xqlu89iqi.css';
import '../../css/s/s-3szabqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqpZjXbFX"><g class="ft5dv1b6b"><path class="arj7difgh"/><path class="xqlu89iqi"/><path class="s-3szabqp"/></g></mask></defs><path mask="url(#SVGqpZjXbFX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:voice-message",
	});
}

export default Component;
