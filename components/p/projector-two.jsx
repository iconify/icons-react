import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f11w8baut.css';
import '../../css/k/k9mjdebal.css';
import '../../css/g/gvo3tujff.css';
import '../../css/q/qaaxmb3xb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcrCi00JS"><g class="s9cl3zbei"><path class="f11w8baut"/><path class="k9mjdebal"/><path class="gvo3tujff"/><circle class="qaaxmb3xb"/></g></mask></defs><path mask="url(#SVGcrCi00JS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:projector-two",
	});
}

export default Component;
