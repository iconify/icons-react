import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi_q2g81h.css';
import '../../css/p/pa2bgcmat.css';
import '../../css/y/yiohhnegz.css';
import '../../css/y/y10ckyb0e.css';
import '../../css/a/afvgdmb3i.css';
import '../../css/s/shijz7c6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKlUbexPJ"><g class="ft5dv1b6b"><path class="bi_q2g81h"/><ellipse class="pa2bgcmat"/><path class="yiohhnegz"/><path class="y10ckyb0e"/><circle class="afvgdmb3i"/><circle class="shijz7c6h"/></g></mask></defs><path mask="url(#SVGKlUbexPJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:monkey",
	});
}

export default Component;
