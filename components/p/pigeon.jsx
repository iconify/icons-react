import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbav1obyp.css';
import '../../css/s/sml478zfl.css';
import '../../css/v/vul_vqbzp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYvTCAF8S"><g class="ft5dv1b6b"><path class="nbav1obyp"/><path class="sml478zfl"/><circle class="vul_vqbzp"/></g></mask></defs><path mask="url(#SVGYvTCAF8S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:pigeon",
	});
}

export default Component;
