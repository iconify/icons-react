import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdf-683ve.css';
import '../../css/p/p8emhixll.css';
import '../../css/v/v6a_jx12z.css';
import '../../css/a/a3sn9d2qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGLlWB2cAN" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVGeB51OeFT" viewBox="0 0 128 56"><path opacity="0" class="p8emhixll"><animateTransform id="SVGCFxShKvC" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"/><animate id="SVGSmLlNdMf" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"/></path><path opacity="0" class="v6a_jx12z"><animateTransform id="SVGwqEgsd0M" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"/><animate id="SVG0HsVRbPu" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"/></path><path opacity="0" class="a3sn9d2qw"><animateTransform id="SVG2d2hbc3a" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"/><animate id="SVGL0RBhe2i" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"/></path></symbol></defs><use width="359" height="231" href="#SVGLlWB2cAN" transform="translate(76.5 140.5)"/><use width="128" height="56" href="#SVGeB51OeFT" transform="translate(192 344)"/>`,
		"fallback": "meteocons:rain",
	});
}

export default Component;
