import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r-ww-8qki.css';
import '../../css/m/m8wx0nbbz.css';
import '../../css/m/moij-qjjo.css';
import '../../css/i/ibv5i6bxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r-ww-8qki"/><path class="m8wx0nbbz"/><circle class="moij-qjjo"/><circle class="ibv5i6bxs"/></g>`,
		"fallback": "circle-flags:us-nm",
	});
}

export default Component;
