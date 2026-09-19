import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/iud-jacyk.css';
import '../../css/f/foxywe51o.css';
import '../../css/r/rzg89ut2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="iud-jacyk"/><path class="foxywe51o"/><path class="rzg89ut2o"/></g>`,
		"fallback": "circle-flags:lang-cy",
	});
}

export default Component;
