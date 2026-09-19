import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cibtkmb-z.css';
import '../../css/b/bz27lsaws.css';
import '../../css/p/pup2il6io.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDt06tdSJ"><g class="ft5dv1b6b"><path class="cibtkmb-z"/><path class="bz27lsaws"/><circle class="pup2il6io"/></g></mask></defs><path mask="url(#SVGDt06tdSJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:nail-polish",
	});
}

export default Component;
