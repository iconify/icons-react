import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdf-683ve.css';
import '../../css/s/s6smy3bhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGywfqvcxz" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVGsNF6BbFk" viewBox="0 0 173 217"><circle r="24" opacity="0" class="s6smy3bhi"><animateTransform id="SVGgM1e1d7l" additive="sum" attributeName="transform" begin="0s;SVGgM1e1d7l.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"/><animate id="SVGfGQvMGTJ" attributeName="r" begin="0s;SVGfGQvMGTJ.end+.75s" dur="2.25s" values="24; 36"/><animate id="SVGVQvaMX5b" attributeName="opacity" begin="0s;SVGfGQvMGTJ.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"/></circle><circle r="24" opacity="0" class="s6smy3bhi"><animateTransform id="SVGk2q3VdVA" additive="sum" attributeName="transform" begin=".83s;SVGk2q3VdVA.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"/><animate id="SVG1m8cEwJY" attributeName="r" begin=".83s;SVG1m8cEwJY.end+.75s" dur="2.25s" values="24; 36"/><animate id="SVGm45KZcGa" attributeName="opacity" begin=".83s;SVGm45KZcGa.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"/></circle><circle r="24" opacity="0" class="s6smy3bhi"><animateTransform id="SVGCuUvQuzP" additive="sum" attributeName="transform" begin="1.66s;SVGCuUvQuzP.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"/><animate id="SVGuosjMg8A" attributeName="r" begin="1.66s;SVGuosjMg8A.end+.75s" dur="2.25s" values="24; 36"/><animate id="SVGcWn6Cd2j" attributeName="opacity" begin="1.66s;SVGcWn6Cd2j.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"/></circle></symbol></defs><use width="359" height="231" href="#SVGywfqvcxz" transform="translate(76.5 140.5)"/><use width="173" height="217" href="#SVGsNF6BbFk" transform="translate(169.5 229.5)"/>`,
		"fallback": "meteocons:smoke",
	});
}

export default Component;
