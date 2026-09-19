import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/tridcqbpp.css';
import '../../css/c/cxgs_geig.css';
import '../../css/x/xz56qgbdb.css';
import '../../css/u/u-38-obdd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiS12mctT"><g class="ufeehvblu"><path class="tridcqbpp"/><path class="cxgs_geig"/><path class="xz56qgbdb"/><path class="u-38-obdd"/></g></mask></defs><path mask="url(#SVGiS12mctT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:plug",
	});
}

export default Component;
